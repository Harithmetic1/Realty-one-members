<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DivisionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('division')->insert([
            'name' => 'Management',
            'No of Employees' => '2',
        ]);
        DB::table('division')->insert([
            'name' => 'Property Management',
            'No of Employees' => '2',
        ]);
        DB::table('division')->insert([
            'name' => 'Interior Design',
            'No of Employees' => '2',
        ]);
    }
}
