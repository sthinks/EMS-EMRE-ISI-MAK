<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function add(Request $request)
    {
        $data = $request->all();
        $validation = Validator::make($data, [
            'firstname' => ['required', 'string'],
            'lastname' => ['required', 'string'],
            'phone' => ['required', 'string'],
            'subject' => ['required', 'string'],
            'message' => ['required', 'string'],
        ]);

        if ($validation->fails()) {
            return response()->json([
                'message' => $validation->errors(),
                'statusCode' => http_response_code(),
            ]);
        } else {
            $added = Contact::Create([
                'firstname' => $data['firstname'],
                'lastname' => $data['lastname'],
                'phone' => $data['phone'],
                'subject' => $data['subject'],
                'message' => $data['message'],
            ]);
            if ($added) {
                $details = [
                    'firstname' => $data['firstname'],
                    'lastname' => $data['lastname'],
                    'phone' => $data['phone'],
                    'subject' => $data['subject'],
                    'message' => $data['message'],
                ];
                return response()->json([
                    'message' => 'Success',
                    'statusCode' => http_response_code(),
                ]);
            } else {
                return response()->json([
                    'message' => 'Unsuccess',
                    'statusCode' => http_response_code(),
                ]);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }
}
