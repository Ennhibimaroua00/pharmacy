<?php 
use App\Http\Controllers\API\CategorieController;
use App\Http\Controllers\API\ProduitController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\API\CommandeController;
use App\Models\Commande;
use Illuminate\Http\Request;


Route::middleware('auth:sanctum')->group(function () {
    Route::post('/commandes', [CommandeController::class, 'store']);
});
Route::get('/commandes', function () {
    return response()->json(Commande::all());
});
Route::get('/categories', [CategorieController::class, 'index']);
Route::get('/produits', [ProduitController::class, 'index']);
Route::get('/produits/search', [ProduitController::class, 'chercher']);
Route::post('/register', [AuthController::class, 'register']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
});
Route::middleware('auth:sanctum')->post('/commandes', [CommandeController::class, 'store']);
Route::get('/chercher', [ProduitController::class, 'chercher']);
Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'admin']);
Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware('auth');
Route::put('/commandes/{id}', function ($id, Request $request) {
    $commande = Commande::findOrFail($id);
    $commande->status = $request->status;
    $commande->save();

    return response()->json($commande);
});
Route::put('/commandes/{id}', function (Request $request, $id) {

    $commande = Commande::find($id);

    if (!$commande) {
        return response()->json([
            'message' => 'Commande non trouvée'
        ], 404);
    }

    $commande->statut = $request->status;
    $commande->save();

    return response()->json([
        'message' => 'Commande mise à jour',
        'commande' => $commande
    ]);
});
Route::post('/login', [AuthController::class, 'login']);
