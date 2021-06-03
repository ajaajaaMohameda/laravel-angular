<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use  Tymon\JWTAuth\Contracts\JWTSubject;

/**
* @OA\Definition(
* definition="User",
* required={"name", "email", "password"},
* @OA\Property(
* property="name",
* type="string",
* description="User name",
* example="John Conor"
* ),
* @OA\Property(
* property="email",
* type="string",
* description="Email Address",
* example="john.conor@terminator.com"
* ),
* @OA\Property(
* property="password",
* type="string",
* description="A very secure password",
* example="123456"
* ),
* )
*/
class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function bikes()
    {
        return $this->hasMany('App\Bike');
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
}
