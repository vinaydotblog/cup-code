<?php

class AnimalsTableSeeder extends Seeder {

    public function run()
    {
    	// Uncomment the below to wipe the table clean before populating
     	DB::table('animals')->delete();

        $animals = array(
        	array('name'=>'Dog', 'description'=>'The domestic dog is a subspecies of the gray wolf, a member of the Canidae family of the mammalian order Carnivora. The term "domestic dog" is generally used for both domesticated and feral varieties.'),
        	array('name'=>'Cat', 'description'=>'The domestic cat is a small, usually furry, domesticated, and carnivorous mammal. It is often called the housecat when kept as an indoor pet, or simply the cat when there is no need to distinguish it from other felids and felines.'),
        	array('name'=>'Rabbit', 'description'=>'Rabbits are small mammals in the family Leporidae of the order Lagomorpha, found in several parts of the world.'),
        	array('name'=>'Tiger', 'description'=>'The tiger is the largest cat species, reaching a total body length of up to 3.3 m and weighing up to 306 kg. It is the third largest land carnivore.'),
        	array('name'=>'Lion', 'description'=>'The lion is one of the four big cats in the genus Panthera and a member of the family Felidae. With some males exceeding 250 kg in weight, it is the second-largest living cat after the tiger. ')
        );

        // Uncomment the below to run the seeder
        DB::table('animals')->insert($animals);
    }

}