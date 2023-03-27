<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Catalog;
use Illuminate\Support\Facades\Validator;

class CatalogController extends Controller
{
    public function getCatalog()
    {
        $data = Catalog::all();
        $data->map(function ($item) {
            if ($item->image) {
                $item->image = url(
                    sprintf('storage/%s', str_replace('\\', '/', $item->image))
                );
            } else {
                $result = null;
                $item->image = $result;
                return $item->image;
            }
        });
        return response()->json($data);
    }
}
