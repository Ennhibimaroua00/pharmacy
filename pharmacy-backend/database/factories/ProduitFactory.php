<?php

namespace Database\Factories;
use App\Models\Categorie;
use App\Models\Produit;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Produit>
 */
class ProduitFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
{
    $categorie = \App\Models\Categorie::inRandomOrder()->first();
    $categorieNom = $categorie ? $categorie->nom : 'Médicaments';
    $imageName = match ($categorieNom) {
        'Médicaments'     => 'medicament.png',
        'Matériel médical'=> 'materiel.png',
        'Soins'           => 'soins.png',
        'Vétérinaires'    => 'veterinaire.png',
        'Orthopédie'      => 'orthopedie.png',
        'Beauté'          => 'beaute.png',
        default           => 'medicament.png',
    };

    return [
        'nom' => ucfirst($this->faker->words(2, true)), 
        'description' => $this->faker->sentence(),
        'prix' => $this->faker->randomFloat(2, 10, 500), 
        'quantite_stock' => $this->faker->numberBetween(0, 100),
        'image' => $imageName, 
        
        'categorie_id' => $categorie ? $categorie->id : \App\Models\Categorie::factory(),
    ];
}
}
