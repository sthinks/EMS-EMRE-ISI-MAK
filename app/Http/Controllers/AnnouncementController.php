<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Announcement;
use Illuminate\Support\Facades\Validator;

class AnnouncementController extends Controller
{
    public function getAnnouncement()
    {
        $data = Announcement::all();
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
