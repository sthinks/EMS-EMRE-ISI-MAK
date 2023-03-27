<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BussinesPartner;
use App\Models\Reference;
use App\Models\Document;
use App\Models\Catalog;
use App\Models\Technical;
use Illuminate\Support\Facades\Validator;

class BaseController extends Controller
{
    public function getAllReference()
    {
        $data = Reference::all();
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
    public function getAllReferenceHome()
    {
        $data = Reference::take(8)->get();
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
    public function getAllPartners()
    {
        $data = BussinesPartner::all();
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
    public function getAllPartnersTen()
    {
        $data = BussinesPartner::take(10)->get();
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
    public function getAllTechnical()
    {
        $data = Technical::all();
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
    public function getAllDocument()
    {
        $data = Document::all();
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
    public function getAllCatalog()
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
        $data->map(function ($item) {
            $file = $item->file;
            if (!empty($file)) {
                $array = json_decode($item->file, true);
                $item->file = array_map(function ($video) {
                    $video['download_link'] =
                        url('storage/') .
                        '/' .
                        str_replace('\\', '/', $video['download_link']);
                    return $video;
                }, $array);
            } else {
                $result = null;
                $item->video = $result;
                return $item->video;
            }
        });

        return response()->json($data);
    }
}
