<?php

use App\Builder;
use Illuminate\Database\Seeder;

class BuildersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('builders')->delete();

        $json = File::get("database/data-sample/builders.json");
        $data = json_decode($json);
        
        foreach ($data as $obj) {
            Builder::create(array(
                'id' => $obj->id,
                'name' => $obj->name,
                'description' => $obj->description,
                'location' => $obj->location
            ));
        }
    }
}
