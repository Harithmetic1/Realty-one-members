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
            'bio' => 'My passion for real estate began when I was very young. I have always had an interest in the real estate market, and looked forward to the day when I could purchase my first home. In Dubai, this opportunity came early in the 2000s. Since then, I have bought and sold multiple properties across the emirates. Today, we service several clients in four divisions – Real Estate Brokerage, Holiday Home Rentals, Property Management, and Interior Design. Whether you are a new buyer or a seasoned investor, our Key One Group will provide you the highest level of detail that relates to your specific needs. "Our philosophy is simple – love what you do. Our passion for local real estate motivates us. It fuels us to continually learn and to keep a finger on the pulse of the market. It also empowers us to network…and to build a network of professionals that we can rely on.',
            'profile_picture' => 'https://keyone.s3.me-south-1.amazonaws.com/profile/2023-03-17/641427b33879f.jpg',
            'division_id' => $this->get_division_id('Management'),
            'role_id' => $this->get_role_id('CEO'),
            'linkedin' => 'https://www.linkedin.com/in/diana-magariu-9568221b1/',
            'instagram' => 'https://www.instagram.com/magariudiana/',
        ]);
        DB::table('users')->insert([
            'name' => 'Alyona Myslyaeva',
            'email' => 'alyona@keyonerealtygroup.com',
            'password' => bcrypt('password'),
            'phone' => '+971 (4) 208 9111',
            'bio' => "I’m ambitious and detail-oriented. I’ve spent the past 7 years learning the ins and outs of this industry and know exactly what I need to do to provide the highest level of property management and overall coordination of all components required for the smooth operation and management of your property. Languages Spoken: Russian and English",
            'profile_picture' => 'https://keyone.s3.me-south-1.amazonaws.com/profile/2022-04-11/6253d2bb0f24a.jpg',
            'division_id' => $this->get_division_id('Management'),
            'role_id' => $this->get_role_id('Chief Operating Officer'),
            'linkedin' => 'https://www.linkedin.com/in/alena-myslyaeva-50984717a/',
        ]);
        DB::table('users')->insert([
            'name' => 'Christian Domantay',
            'email' => 'christian@keyonerealtygroup.com',
            'password' => bcrypt('password'),
            'phone' => '+971554487885',
            'bio' => "I am a full-stack web and mobile developer with a background in real estate. I have extensive experience in developing web and mobile applications using PHP, Laravel, Flutter, CSS, HTML, SQL, AWS, and Google Cloud Platform. I have experience in developing Android and iOS applications. I am passionate about creating innovative solutions that are user-friendly and efficient.",
            'profile_picture' => 'https://keyone.s3.me-south-1.amazonaws.com/profile/2023-06-26/649993bbabab4.jpg',
            'division_id' => $this->get_division_id('Interior Design'),
            'role_id' => $this->get_role_id('Full Stack Software Developer'),
            'linkedin' => 'https://www.linkedin.com/in/christian-remegio-adrian-domantay/',
            'instagram' => 'https://www.instagram.com/chrstn_adrn/',
        ]);
        DB::table('users')->insert([
            'name' => 'Jason Jimenez',
            'email' => 'jason@keyonerealtygroup.com',
            'password' => bcrypt('password'),
            'phone' => '+971564083936',
            'bio' => "An organized and very creative professional with proven marketing skills and a desire to learn more. I possess 11 years of experience working for a diverse group of organizations and clients. Gained expertise in data analysis, publication marketing, and web-based advertising.",
            'profile_picture' => 'https://keyone.s3.me-south-1.amazonaws.com/profile/2022-04-15/625905b4f39c1.jpg',
            'division_id' => $this->get_division_id('Interior Design'),
            'role_id' => $this->get_role_id('Head of Marketing'),
            'instagram' => 'https://www.instagram.com/jason.jimenez.arts/',
        ]);
        DB::table('users')->insert([
            'name' => 'Karina Atayeva',
            'email' => 'pm2@keyonerealtygroup.com',
            'password' => bcrypt('password'),
            'phone' => '+971561175747',
            'bio' => "I have been working in real estate since 2017. A special attitude and interest in the market allow me to accumulate experience in providing various types of services in the real estate sector. I am constantly striving to master new things. I believe that there are no unresolved situations, you only need to properly study the issue and solve it for the benefit of the client",
            'profile_picture' => 'https://keyone.s3.me-south-1.amazonaws.com/profile/2022-08-15/62fa464391515.jpg',
            'division_id' => $this->get_division_id('Property Management'),
            'role_id' => $this->get_role_id('Property Management Assistant'),
        ]);
        DB::table('users')->insert([
            'name' => 'Azam Ali Syed Jahangir Ali',
            'email' => 'ali@keyonerealtygroup.com',
            'password' => bcrypt('password'),
            'phone' => '+971 (4) 383-1063',
            'bio' => "I’m a strong, trustworthy salesperson that works solely with utmost integrity for my client’s best interest. For the past 15 years, I’ve helped my clients in various matters, among them, information on schools, contractors, recreation, and other common needs when relocating or purchasing a property. Languages Spoken: English, Hindi, and Urdu",
            'profile_picture' => 'https://keyone.s3.me-south-1.amazonaws.com/profile/2022-06-21/62b16c7514f93.jpg',
            'division_id' => $this->get_division_id('Property Management'),
            'role_id' => $this->get_role_id('Exclusive Senior Property Consultant'),
        ]);
    }
}
