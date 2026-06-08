<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\LigneCommande; 
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Models\Commande;
use App\Models\Produit;
use Illuminate\Support\Facades\Auth;



class CommandeController extends Controller
{
    /**
     * Enregistrer une nouvelle commande depuis React.
     */
    public function index(Request $request)
{
    $commandes = $request->user()->commandes()->with('lignes.produit')->orderBy('created_at', 'desc')->get();
    
    return response()->json($commandes);
}
public function store(Request $request)
    {
        $validatedData = $request->validate([
            'items' => 'required|array',
            'total' => 'required|numeric',
        ]);

        
        $commande = Commande::create([
            'user_id' => Auth::id(), 
            'total' => $validatedData['total'],
            'items' => json_encode($validatedData['items']), 
        ]);

       
        return response()->json([
            'message' => 'Commande enregistrée avec succès',
            'commande' => $commande
        ], 201);
    }
    }
