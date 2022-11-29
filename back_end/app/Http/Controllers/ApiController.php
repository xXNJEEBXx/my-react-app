<?php

namespace App\Http\Controllers;


use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Auth;
use Illuminate\Support\Facades\Auth as FacadesAuth;

class ApiController extends Controller
{
    public function index()
    {
        // $products_array = [];
        // $products = Product::all();
        // foreach ($products as $product) {
        //     if ($product->product_images->first() == null) {
        //         $product_images_names = null;
        //     } else {
        //         $product_images_names = [];
        //         foreach ($product->product_images as $product_image) {
        //             $product_images_names[] = $product_image->product_imge_name;
        //         }
        //     }

        //     $products_array[] = [
        //         'id' => $product->id,
        //         'name' => $product->product_name,
        //         'main_price' => $product->main_price(),
        //         'sup_price' => $product->sup_price(),
        //         'type' => $product->product_type,
        //         'images' => $product_images_names,
        //     ];
        // }
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => ['required', Rule::unique('users')],
            'email' => ['required', 'email', Rule::unique('users')],
            'password' => ['required', 'confirmed'],
        ]);
        if ($validator->fails()) {
            return response()->json([
                'validate_err' => $validator->messages(),
            ]);
        } else {
            $table = new User;
            $table->username = $request->username;
            $table->email = $request->email;
            $table->password = $request->password;
            $table->save();
            $token = $table->createToken("myapptoken")->accessToken;
            return response()->json([
                'status' => 200,
                'message' => 'Your account has been created successfully',
                'token'  => $token
            ]);
        }
    }
    public function authCheck()
    {
        return response()->json([
            'message' => 'login successfully',
        ]);
    }
    public function logout()
    {
        auth()->user()->tokens()->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Logged out successfully',
        ]);
    }
}
