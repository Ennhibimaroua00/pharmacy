<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Categorie;
use App\Models\Produit;

class PharmacySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            'Médicaments'     => Categorie::create(['nom' => 'Médicaments']),
            'Matériel médical'=> Categorie::create(['nom' => 'Matériel médical']),
            'Soins'           => Categorie::create(['nom' => 'Soins']),
            'Vétérinaires'    => Categorie::create(['nom' => 'Vétérinaires']),
            'Orthopédie'      => Categorie::create(['nom' => 'Orthopédie']),
            'Beauté'          => Categorie::create(['nom' => 'Beauté']),
        ];

        $rawProducts = [
            // Médicaments
            ['nom' => 'Doliprane', 'description' => '1g (8 comprimés)', 'prix' => 10.80, 'image' => 'assets/Médicaments/doliprane.png', 'cat' => 'Médicaments'],
            ['nom' => 'Dafalgan', 'description' => '1g (8 comprimés effervescents)', 'prix' => 14.20, 'image' => 'assets/Médicaments/dafalgan.png', 'cat' => 'Médicaments'],
            ['nom' => 'Aspegic', 'description' => '1000mg (20 sachets)', 'prix' => 27.40, 'image' => 'assets/Médicaments/aspegic.png', 'cat' => 'Médicaments'],
            ['nom' => 'Voltarene', 'description' => '50mg (comprimés)', 'prix' => 24.50, 'image' => 'assets/Médicaments/voltarene.png', 'cat' => 'Médicaments'],
            ['nom' => 'Apranax', 'description' => '550mg (8 comprimés)', 'prix' => 26.00, 'image' => 'assets/Médicaments/apranax.png', 'cat' => 'Médicaments'],
            ['nom' => 'Meteospasmyl', 'description' => '20 capsules', 'prix' => 34.80, 'image' => 'assets/Médicaments/meteospasmyl.png', 'cat' => 'Médicaments'],
            ['nom' => 'Omeprazole', 'description' => '20mg (14 capsules)', 'prix' => 30.00, 'image' => 'assets/Médicaments/omeprazole.png', 'cat' => 'Médicaments'],
            ['nom' => 'Smecta', 'description' => '12 sachets', 'prix' => 23.10, 'image' => 'assets/Médicaments/smecta.png', 'cat' => 'Médicaments'],
            ['nom' => 'Actifed', 'description' => 'Boîte comprimés', 'prix' => 25.00, 'image' => 'assets/Médicaments/actifed.png', 'cat' => 'Médicaments'],
            ['nom' => 'Humex', 'description' => 'Boîte comprimés', 'prix' => 32.00, 'image' => 'assets/Médicaments/humex.png', 'cat' => 'Médicaments'],
            ['nom' => 'Claritine', 'description' => '10mg (10 comprimés)', 'prix' => 30.00, 'image' => 'assets/Médicaments/claritine.png', 'cat' => 'Médicaments'],
            ['nom' => 'Augmentin', 'description' => '1g (12 comprimés)', 'prix' => 78.40, 'image' => 'assets/Médicaments/augmentin.png', 'cat' => 'Médicaments'],
            ['nom' => 'Amoxil', 'description' => '1g (12 comprimés)', 'prix' => 40.00, 'image' => 'assets/Médicaments/amoxil.png', 'cat' => 'Médicaments'],
            ['nom' => 'Spasfon', 'description' => '30 comprimés', 'prix' => 25.00, 'image' => 'assets/Médicaments/spasfon.png', 'cat' => 'Médicaments'],
            ['nom' => 'Profenid', 'description' => '100mg (20 comprimés)', 'prix' => 35.00, 'image' => 'assets/Médicaments/profenid.png', 'cat' => 'Médicaments'],
            ['nom' => 'Topaal', 'description' => 'Comprimés à croquer', 'prix' => 23.50, 'image' => 'assets/Médicaments/topaal.png', 'cat' => 'Médicaments'],
            ['nom' => 'Vogalene', 'description' => 'Boîte comprimés', 'prix' => 25.00, 'image' => 'assets/Médicaments/vogalene.png', 'cat' => 'Médicaments'],
            ['nom' => 'Debridat', 'description' => '100mg (20 comprimés)', 'prix' => 32.50, 'image' => 'assets/Médicaments/debridat.png', 'cat' => 'Médicaments'],
            ['nom' => 'Duphalac', 'description' => 'Sirop', 'prix' => 36.00, 'image' => 'assets/Médicaments/duphalac.png', 'cat' => 'Médicaments'],
            ['nom' => 'Rhinomicine', 'description' => '20 comprimés effervescents', 'prix' => 21.50, 'image' => 'assets/Médicaments/rhinomicine.png', 'cat' => 'Médicaments'],
            ['nom' => 'Toplexil', 'description' => 'Sirop', 'prix' => 20.00, 'image' => 'assets/Médicaments/toplexil.png', 'cat' => 'Médicaments'],
            ['nom' => 'Maxilase', 'description' => 'Boîte comprimés', 'prix' => 28.00, 'image' => 'assets/Médicaments/maxilase.png', 'cat' => 'Médicaments'],
            ['nom' => 'Supradyn', 'description' => '30 comprimés effervescents', 'prix' => 46.00, 'image' => 'assets/Médicaments/supradyn.png', 'cat' => 'Médicaments'],
            ['nom' => 'Mag2', 'description' => '30 comprimés', 'prix' => 45.00, 'image' => 'assets/Médicaments/mag2.png', 'cat' => 'Médicaments'],
            ['nom' => 'Ranferon', 'description' => 'Complément fer', 'prix' => 50.00, 'image' => 'assets/Médicaments/ranferon.png', 'cat' => 'Médicaments'],
            ['nom' => 'Fucidine', 'description' => 'Crème 2% (15g)', 'prix' => 26.00, 'image' => 'assets/Médicaments/fucidine.png', 'cat' => 'Médicaments'],
            ['nom' => 'Biafine', 'description' => 'Grand tube', 'prix' => 42.00, 'image' => 'assets/Médicaments/biafine.png', 'cat' => 'Médicaments'],

            // Orthopédie
            ['nom' => 'Genouillère orthopédique', 'description' => 'Soutient le genou. Réduit la douleur.', 'prix' => 250.00, 'image' => 'assets/Orthopédie/genouillere.png', 'cat' => 'Orthopédie'],
            ['nom' => 'Ceinture lombaire', 'description' => 'Maintient le dos. Soulage les lombaires.', 'prix' => 320.00, 'image' => 'assets/Orthopédie/ceinture-lombaire.png', 'cat' => 'Orthopédie'],
            ['nom' => 'Collier cervical', 'description' => 'Protège le cou. Réduit les tensions.', 'prix' => 180.00, 'image' => 'assets/Orthopédie/collier-cervical.png', 'cat' => 'Orthopédie'],
            ['nom' => 'Attelle poignet', 'description' => 'Stabilise le poignet. Réduit les douleurs.', 'prix' => 140.00, 'image' => 'assets/Orthopédie/attelle-poignet.png', 'cat' => 'Orthopédie'],
            ['nom' => 'Attelle cheville', 'description' => 'Protège la cheville. Offre un bon maintien.', 'prix' => 160.00, 'image' => 'assets/Orthopédie/attelle-cheville.png', 'cat' => 'Orthopédie'],
            ['nom' => 'Semelles orthopédiques', 'description' => 'Améliorent le confort. Réduisent la fatigue.', 'prix' => 200.00, 'image' => 'assets/Orthopédie/semelles.png', 'cat' => 'Orthopédie'],
            ['nom' => 'Correcteur posture', 'description' => 'Redresse le dos. Corrige la posture.', 'prix' => 220.00, 'image' => 'assets/Orthopédie/correcteur-posture.png', 'cat' => 'Orthopédie'],
            ['nom' => 'Écharpe bras médicale', 'description' => 'Soutient le bras. Réduit la pression.', 'prix' => 120.00, 'image' => 'assets/Orthopédie/echarpe-bras.png', 'cat' => 'Orthopédie'],
            ['nom' => 'Coussin lombaire', 'description' => 'Soulage le dos. Confort pour assise.', 'prix' => 270.00, 'image' => 'assets/Orthopédie/coussin-lombaire.png', 'cat' => 'Orthopédie'],
            ['nom' => 'Coudière orthopédique', 'description' => 'Protège le coude. Réduit les douleurs.', 'prix' => 150.00, 'image' => 'assets/Orthopédie/coudiere.png', 'cat' => 'Orthopédie'],

            // Beauté
            ['nom' => 'Crème hydratante', 'description' => 'Hydrate la peau. Texture légère.', 'prix' => 120.00, 'image' => 'assets/Beauté/creme-hydratante.png', 'cat' => 'Beauté'],
            ['nom' => 'Gel nettoyant', 'description' => 'Nettoie le visage. Élimine les impuretés.', 'prix' => 90.00, 'image' => 'assets/Beauté/gel-nettoyant.png', 'cat' => 'Beauté'],
            ['nom' => 'Sérum visage', 'description' => 'Illumine la peau. Réduit les imperfections.', 'prix' => 180.00, 'image' => 'assets/Beauté/serum-visage.png', 'cat' => 'Beauté'],
            ['nom' => 'Écran solaire', 'description' => 'Protège du soleil. Texture douce.', 'prix' => 140.00, 'image' => 'assets/Beauté/ecran-solaire.png', 'cat' => 'Beauté'],
            ['nom' => 'Masque visage', 'description' => 'Purifie la peau. Hydratation intense.', 'prix' => 110.00, 'image' => 'assets/Beauté/masque-visage.png', 'cat' => 'Beauté'],
            ['nom' => 'Lotion tonique', 'description' => 'Rafraîchit le visage. Apaise la peau.', 'prix' => 95.00, 'image' => 'assets/Beauté/lotion-tonique.png', 'cat' => 'Beauté'],
            ['nom' => 'Huile corps', 'description' => 'Nourrit la peau. Douceur immédiate.', 'prix' => 160.00, 'image' => 'assets/Beauté/huile-corps.png', 'cat' => 'Beauté'],
            ['nom' => 'Savon médical', 'description' => 'Nettoyage profond. Respecte la peau.', 'prix' => 70.00, 'image' => 'assets/Beauté/savon-medical.png', 'cat' => 'Beauté'],
            ['nom' => 'Crème mains', 'description' => 'Répare les mains. Hydratation durable.', 'prix' => 85.00, 'image' => 'assets/Beauté/creme-mains.png', 'cat' => 'Beauté'],
            ['nom' => 'Baume lèvres', 'description' => 'Protège les lèvres. Hydratation rapide.', 'prix' => 45.00, 'image' => 'assets/Beauté/baume-levres.png', 'cat' => 'Beauté'],

            // Matériel médical
            ['nom' => 'Tensiomètre', 'description' => 'Mesure la tension. Utilisation simple.', 'prix' => 350.00, 'image' => 'assets/Matériel médical/tensiometre.png', 'cat' => 'Matériel médical'],
            ['nom' => 'Thermomètre digital', 'description' => 'Mesure la température. Affichage rapide.', 'prix' => 80.00, 'image' => 'assets/Matériel médical/thermometre.png', 'cat' => 'Matériel médical'],
            ['nom' => 'Glucomètre', 'description' => 'Contrôle le sucre. Lecture précise.', 'prix' => 290.00, 'image' => 'assets/Matériel médical/glucometre.png', 'cat' => 'Matériel médical'],
            ['nom' => 'Fauteuil roulant', 'description' => 'Confort de déplacement. Structure solide.', 'prix' => 2200.00, 'image' => 'assets/Matériel médical/fauteuil-roulant.png', 'cat' => 'Matériel médical'],
            ['nom' => 'Nébuliseur', 'description' => 'Aide la respiration. Utilisation simple.', 'prix' => 480.00, 'image' => 'assets/Matériel médical/nebuliseur.png', 'cat' => 'Matériel médical'],
            ['nom' => 'Oxymètre', 'description' => 'Mesure l’oxygène. Lecture rapide.', 'prix' => 170.00, 'image' => 'assets/Matériel médical/oxymetre.png', 'cat' => 'Matériel médical'],
            ['nom' => 'Balance médicale', 'description' => 'Mesure le poids. Bonne précision.', 'prix' => 260.00, 'image' => 'assets/Matériel médical/balance-medicale.png', 'cat' => 'Matériel médical'],
            ['nom' => 'Béquille médicale', 'description' => 'Aide à marcher. Réglable facilement.', 'prix' => 140.00, 'image' => 'assets/Matériel médical/bequille.png', 'cat' => 'Matériel médical'],
            ['nom' => 'Stéthoscope', 'description' => 'Écoute précise. Qualité professionnelle.', 'prix' => 210.00, 'image' => 'assets/Matériel médical/stethoscope.png', 'cat' => 'Matériel médical'],

            // Vétérinaires
            ['nom' => 'Shampooing vétérinaire', 'description' => 'Nettoie le pelage. Respecte la peau.', 'prix' => 95.00, 'image' => 'assets/Vétérinaires/shampooing-vet.png', 'cat' => 'Vétérinaires'],
            ['nom' => 'Collier antipuce', 'description' => 'Protège contre les puces. Longue durée.', 'prix' => 120.00, 'image' => 'assets/Vétérinaires/collier-antipuce.png', 'cat' => 'Vétérinaires'],
            ['nom' => 'Vitamines pour animaux', 'description' => 'Renforce la santé. Favorise l’énergie.', 'prix' => 150.00, 'image' => 'assets/Vétérinaires/vitamines-animal.png', 'cat' => 'Vétérinaires'],
            ['nom' => 'Spray désinfectant', 'description' => 'Nettoie les plaies. Action rapide.', 'prix' => 80.00, 'image' => 'assets/Vétérinaires/spray-desinfectant.png', 'cat' => 'Vétérinaires'],
            ['nom' => 'Croquettes pour chat', 'description' => 'Nutrition équilibrée. Riche en protéines.', 'prix' => 210.00, 'image' => 'assets/Vétérinaires/croquettes-chat.png', 'cat' => 'Vétérinaires'],
            ['nom' => 'Croquettes pour chien', 'description' => 'Favorise la croissance. Bonne digestion.', 'prix' => 260.00, 'image' => 'assets/Vétérinaires/croquettes-chien.png', 'cat' => 'Vétérinaires'],
            ['nom' => 'Lait pour animaux', 'description' => 'Riche en nutriments. Facile à digérer.', 'prix' => 75.00, 'image' => 'assets/Vétérinaires/lait-animal.png', 'cat' => 'Vétérinaires'],
            ['nom' => 'Brosse pour animaux', 'description' => 'Retire les poils. Massage doux.', 'prix' => 60.00, 'image' => 'assets/Vétérinaires/brosse-animal.png', 'cat' => 'Vétérinaires'],
            ['nom' => 'Antiparasitaire', 'description' => 'Protège les animaux. Action efficace.', 'prix' => 140.00, 'image' => 'assets/Vétérinaires/antiparasitaire.png', 'cat' => 'Vétérinaires'],
            ['nom' => 'Gamelle animale', 'description' => 'Résistante et légère. Facile à laver.', 'prix' => 55.00, 'image' => 'assets/Vétérinaires/gamelle-animal.png', 'cat' => 'Vétérinaires'],

            // Soins
            ['nom' => 'Test de grossesse', 'description' => 'Résultat rapide. Fiabilité élevée.', 'prix' => 45.00, 'image' => 'assets/soins/test-grossesse.jpeg', 'cat' => 'Soins'],
            ['nom' => 'Gants médicaux', 'description' => 'Protection efficace. Usage quotidien.', 'prix' => 90.00, 'image' => 'assets/soins/gants-medicaux.jpeg', 'cat' => 'Soins'],
            ['nom' => 'Tulle gras', 'description' => 'Protège les plaies. Favorise la cicatrisation.', 'prix' => 55.00, 'image' => 'assets/soins/tulle-gras.jpeg', 'cat' => 'Soins'],
            ['nom' => 'Bétadine Scrub', 'description' => 'Nettoie la peau. Action antiseptique.', 'prix' => 65.00, 'image' => 'assets/soins/betadine-scrub.jpeg', 'cat' => 'Soins'],
            ['nom' => 'Dakin', 'description' => 'Désinfecte les plaies. Action rapide.', 'prix' => 40.00, 'image' => 'assets/soins/dakin.jpeg', 'cat' => 'Soins'],
            ['nom' => 'Cathéter', 'description' => 'Utilisation médicale. Matériau stérile.', 'prix' => 25.00, 'image' => 'assets/soins/catheter.jpeg', 'cat' => 'Soins'],
            ['nom' => 'Seringues médicales', 'description' => 'Injection précise. Usage sécurisé.', 'prix' => 30.00, 'image' => 'assets/soins/seringues.jpeg', 'cat' => 'Soins'],
            ['nom' => 'Bandelettes réactives', 'description' => 'Lecture rapide. Résultats précis.', 'prix' => 110.00, 'image' => 'assets/soins/bandelettes-reactives.jpeg', 'cat' => 'Soins'],
        ];

        foreach ($rawProducts as $p) {
            Produit::create([
                'nom' => $p['nom'],
                'description' => $p['description'],
                'prix' => $p['prix'],
                'image' => $p['image'],
                'quantite_stock' => rand(10, 80), 
                'categorie_id' => $categories[$p['cat']]->id,
            ]);
        }
    }
}