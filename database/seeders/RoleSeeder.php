<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('role')->insert([
            'name' => 'CEO',
            'description' => 'CEO of the company',
        ]);
        DB::table('role')->insert([
            'name' => 'Chief Operating Officer',
            'description' => 'Chief Operating Officer of the company',
        ]);
        DB::table('role')->insert([
            'name' => 'Full Stack Software Developer',
            'description' => 'Full Stack Software Developer of the company',
        ]);
        DB::table('role')->insert([
            'name' => 'Head of Marketing',
            'description' => 'Head of Marketing of the company',
        ]);
        DB::table('role')->insert([
            'name' => 'Property Management Assistant',
            'description' => 'Property Management Assistant of the company',
        ]);
        DB::table('role')->insert([
            'name' => 'Exclusive Senior Property Consultant',
            'description' => 'Exclusive Senior Property Consultant of the company',
        ]);
    }
}
