<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ratingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
        return [
            'user_id' => $this->user_id,
            'bike_id' => $this->bike_id,
            'rating' => $this->rating,
            'bike' => $this->bike,
            'average_rating' => $this->bike->ratings->avg('rating'),
             'created_at' => (string) $this->created_at,
             'updated_at' => (string) $this->updated_at
         ];
     }
    }
}
