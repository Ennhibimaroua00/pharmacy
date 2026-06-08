<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Models\Produit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ProduitController extends Controller
{
    public function index()
    {
        $produits = Produit::with('categorie')->get();
        return response()->json($produits, 200);
    }
     public function chercher(Request $request)
{
    $query = $request->query('query');

    $produits = Produit::where(
        'nom',
        'LIKE',
        '%' .$query. '%'
    )->get();

    return response()->json($produits);
}
}
