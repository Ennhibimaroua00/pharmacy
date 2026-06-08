<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
public function up(): void
{
    Schema::create('categories', function (Blueprint $table) {
        $table->id(); // L-ID dial l-catégorie
        $table->string('nom')->unique(); // Smiet l-catégorie (b7al: Antibiotiques, Sirops, Vitamines...)
        $table->text('description')->nullable(); // Description 3la l-catégorie (facultatif)
        $table->timestamps(); // create_at o updated_at
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categories');
    }
};
