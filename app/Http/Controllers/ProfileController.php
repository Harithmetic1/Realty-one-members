<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

use Illuminate\Support\Facades\Log;

class ProfileController extends Controller
{

    /**
     * Get all users.
     */
    public function getAllUsers(Request $request): Response
    {
        $users = User::all();
        // echo ($users);
        foreach ($users as $user) {
            $role = DB::table('role')->where('id', $user->role_id)->first()->name;
            $division = DB::table('division')->where('id', $user->division_id)->first()->name;
            $user->role = $role;
            $user->division = $division;
        }
        return Inertia::render('Welcome', ['users' => $users]);
    }

    /**
     * Get a user.
     */
    public function getUser(Request $request): Response
    {
        $user = User::find($request->id);
        $role = DB::table('role')->where('id', $user->role_id)->first()->name;
        $division = DB::table('division')->where('id', $user->division_id)->first()->name;
        $user->role = $role;
        $user->division = $division;
        return Inertia::render('Employee', ['user' => $user]);
    }

    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $user = User::find($request->id);
        // Get the validated data
        $validatedData = $request->validated();

        Log::info('Validated Data: ' . json_encode($validatedData));

        if ($request->hasFile('profile_picture')) {
            $destination_path = 'uploads/profile_pictures/' . $user->profile_picture;
            if (file_exists($destination_path)) {
                unlink($destination_path);
            }
            $file = $request->file('profile_picture');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->store('public/uploads/profile_pictures', $filename);
            $validatedData['profile_picture'] = $filename;
        }

        $request->user()->fill($validatedData);

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
