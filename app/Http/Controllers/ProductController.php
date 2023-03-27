<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function getProduct()
    {
        $data = Product::all();
        $data->map(function ($item) {
            if ($item->image) {
                $images = json_decode($item->image);
                $item->image = collect($images)
                    ->map(function ($image) {
                        return url(
                            sprintf(
                                'storage/%s',
                                str_replace('\\', '/', $image)
                            )
                        );
                    })
                    ->toArray();
            } else {
                $item->image = null;
            }
            return $item;
        });
        return response()->json($data);
    }
    public function getProductFour()
    {
        $data = Product::take(4)->get();
        $data->map(function ($item) {
            if ($item->image) {
                $images = json_decode($item->image);
                $item->image = collect($images)
                    ->map(function ($image) {
                        return url(
                            sprintf(
                                'storage/%s',
                                str_replace('\\', '/', $image)
                            )
                        );
                    })
                    ->toArray();
            } else {
                $item->image = null;
            }
            return $item;
        });
        return response()->json($data);
    }
    public function getProductId($slug)
    {
        $data = Product::where('slug', $slug)->first();

        if ($data->image) {
            $images = json_decode($data->image);
            $data->image = collect($images)
                ->map(function ($image) {
                    return url(
                        sprintf('storage/%s', str_replace('\\', '/', $image))
                    );
                })
                ->toArray();
        } else {
            $data->image = null;
        }

        return response()->json($data);
    }
}
