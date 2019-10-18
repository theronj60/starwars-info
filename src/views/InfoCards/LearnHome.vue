<template> 
    <v-container>
        <v-row>
            <v-col cols="12"
                    sm="6"
                    md="4"
                    v-for="category in catagories"
                    :key="category.title">
                <v-card
                    class="mx-auto"

                    
                >
                    <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="category.image"
                    >
                    <v-card-title></v-card-title>
                    </v-img>

                    

                    <v-card-text class="text--primary">
                    <div>{{ category.title  }}</div>

                    <div></div>
                    </v-card-text>

                    <v-card-actions>
                    <v-btn
                        color="orange"
                        text
                    >
                        Back
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="orange"
                        text
                        :to="category.url"
                    >
                        Next
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            
        </v-row>
        
    </v-container>
    
</template>

<script>
/* eslint-disable */
import axios from 'axios';

export default {
    components: {
        
    },
    mounted: function () {
        var self = this;
        axios.get('https://swapi.co/api/')
            .then(function (response) {
                // self.categoryCards = response.data;
                // handle success
                // self.catagories = response.data;
                // console.log(response);
                // console.log(self.catagories.people);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    },
    data: () => ({
        catagories: [
            { title: 'Films', image: 'http://media.comicbook.com/2015/10/star-wars-seven-movie-marathon-155731.jpg', url: '/learn/films'},
            { title: 'Planets', image: 'https://i.pinimg.com/originals/4b/88/4e/4b884edea212ebc4fd2f9dd7b31aadb0.jpg', url: '/learn/planets'},
            { title: 'People', image: 'https://fsmedia.imgix.net/00/99/48/f6/fde8/434a/8f15/664daa8a53be/saga-star-warspng.png', url: '/learn/people'},
            { title: 'Species', image: 'https://img.cinemablend.com/filter:scale/quill/2/4/e/1/7/9/24e179a573b9d16da321f39f6ea110e5f6eb8a1a.jpg?mw=600', url: '/learn/species'},
            { title: 'Vehicles', image: 'https://images-na.ssl-images-amazon.com/images/I/61SsOnqTloL._SX425_.jpg', url: '/learn/vehicles'},
            { title: 'Starships', image: 'https://vignette.wikia.nocookie.net/starwars/images/5/50/NBfrigate.JPG/revision/latest?cb=20061215024715', url: '/learn/species'},
        ]
    }),
    
};
</script>
