<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{

    public function get_role_id($role)
    {
        print_r($role);
        $role_id = DB::table('role')->where('name', $role)->first()->id;
        return $role_id;
    }
    public function get_division_id($department)
    {
        print_r($department);
        $division_id = DB::table('division')->where('name', $department)->first()->id;
        return $division_id;
    }
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('users')->insert([
            'name' => 'Diana Magariu',
            'email' => 'diana@keyonerealtygroup.com',
            'password' => bcrypt('password'),
            'phone' => '+971 (4) 208 9111',
            'bio' => 'lorem ipsum',
            'profile_picture' => 'https://keyone.s3.me-south-1.amazonaws.com/profile/2023-03-17/641427b33879f.jpg',
            'Department' => 'Management',
            'Role' => 'CEO',
            // 'division_id' => $this->get_division_id('Management'),
            // 'role_id' => $this->get_role_id('CEO'),
            'linkedin' => 'https://www.linkedin.com/in/diana-magariu-9568221b1/',
            'instagram' => 'https://www.instagram.com/magariudiana/',
        ]);
        DB::table('users')->insert([
            'name' => 'Alyona Myslyaeva',
            'email' => 'alyona@keyonerealtygroup.com',
            'password' => bcrypt('password'),
            'phone' => '+971 (4) 208 9111',
            'bio' => "Ambitious and detail-oriented with 7 years of industry expertise. Dedicated to delivering top-tier property management and seamless operational coordination. Fluent in Russian and English.",
            'profile_picture' => 'https://keyone.s3.me-south-1.amazonaws.com/profile/2022-04-11/6253d2bb0f24a.jpg',
            'Department' => 'Management',
            'Role' => 'Chief Operating Officer',
            // 'division_id' => $this->get_division_id('Management'),
            // 'role_id' => $this->get_role_id('Chief Operating Officer'),
            'linkedin' => 'https://www.linkedin.com/in/alena-myslyaeva-50984717a/',
        ]);
        DB::table('users')->insert([
            'name' => 'Christian Domantay',
            'email' => 'christian@keyonerealtygroup.com',
            'password' => bcrypt('password'),
            'phone' => '+971554487885',
            'bio' => "Experienced full-stack web and mobile developer with a real estate background. Proficient in PHP, Laravel, Flutter, CSS, HTML, SQL, AWS, and GCP. Skilled in Android and iOS app development. Passionate about user-friendly and efficient solutions.",
            'profile_picture' => 'https://keyone.s3.me-south-1.amazonaws.com/profile/2023-06-26/649993bbabab4.jpg',
            'Department' => 'Interior Design',
            'Role' => 'Full Stack Software Developer',
            // 'division_id' => $this->get_division_id('Interior Design'),
            // 'role_id' => $this->get_role_id('Full Stack Software Developer'),
            'linkedin' => 'https://www.linkedin.com/in/christian-remegio-adrian-domantay/',
            'instagram' => 'https://www.instagram.com/chrstn_adrn/',
        ]);
        DB::table('users')->insert([
            'name' => 'Jason Jimenez',
            'email' => 'jason@keyonerealtygroup.com',
            'password' => bcrypt('password'),
            'phone' => '+971564083936',
            'bio' => "Organized and creative marketing professional with 11 years of diverse experience. Proven skills in data analysis, publication marketing, and web-based advertising. Eager to continue learning and contribute to new challenges.",
            'profile_picture' => 'https://keyone.s3.me-south-1.amazonaws.com/profile/2022-04-15/625905b4f39c1.jpg',
            'Department' => 'Interior Design',
            'Role' => 'Head of Marketing',
            // 'division_id' => $this->get_division_id('Interior Design'),
            // 'role_id' => $this->get_role_id('Head of Marketing'),
            'instagram' => 'https://www.instagram.com/jason.jimenez.arts/',
        ]);
        DB::table('users')->insert([
            'name' => 'Karina Atayeva',
            'email' => 'pm2@keyonerealtygroup.com',
            'password' => bcrypt('password'),
            'phone' => '+971561175747',
            'bio' => "Real estate professional since 2017, specializing in diverse services. Committed to continuous learning, mastering new skills, and resolving issues thoroughly for the benefit of clients.",
            'profile_picture' => 'https://keyone.s3.me-south-1.amazonaws.com/profile/2022-08-15/62fa464391515.jpg',
            'Department' => 'Property Management',
            'Role' => 'Property Management Assistant',
            // 'division_id' => $this->get_division_id('Property Management'),
            // 'role_id' => $this->get_role_id('Property Management Assistant'),
        ]);
        DB::table('users')->insert([
            'name' => 'Azam Ali Syed Jahangir Ali',
            'email' => 'ali@keyonerealtygroup.com',
            'password' => bcrypt('password'),
            'phone' => '+971 (4) 383-1063',
            'bio' => "Trustworthy salesperson with 15 years prioritizing client interests. Provides assistance in schools, contractors, and recreation during relocation or property purchase. Fluent in English, Hindi, Urdu.",
            'profile_picture' => 'https://keyone.s3.me-south-1.amazonaws.com/profile/2022-06-21/62b16c7514f93.jpg',
            'Department' => 'Property Management',
            'Role' => 'Exclusive Senior Property Consultant',
            // 'division_id' => $this->get_division_id('Property Management'),
            // 'role_id' => $this->get_role_id('Exclusive Senior Property Consultant'),
        ]);
    }
}
