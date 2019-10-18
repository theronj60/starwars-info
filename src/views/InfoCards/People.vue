<template> 
    <v-container>
        <v-row>
            <v-col cols="12"
                    sm="6"
                    md="4"
                    v-model="peoples"
                    v-for="people in peoples"
                    :key="people.name">
                <v-card
                    class="mx-auto"
                >
                    <v-img
                    class="white--text align-end"
                    height="200px"
                    src=""
                    >
                    <v-card-title></v-card-title>
                    </v-img>

                    

                    <v-card-text class="text--primary">
                    <div>{{ people.name }}</div>

                    <div>{{ people.birth_year }}</div>
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
                        to=""
                    >
                        Next
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            
        </v-row>

        <div class="text-center">
            <v-pagination
                v-model="pages"
                :length="9"
                prev-icon="mdi-menu-left"
                next-icon="mdi-menu-right"
                @input="next()"
                >
            </v-pagination>
        </div>
        
    </v-container>
    
</template>

<script>

import axios from 'axios';

export default {
    components: {
        
    },
    mounted: function () {
        var self = this;
        axios.get('https://swapi.co/api/people/')
            .then(function (response) {
                self.peoples = response.data.results;
                
                // console.log(response.data.results);
                
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    },
    data: () => ({
        peoples: [],
        pages: 1
    }),
    methods: {
        next: function () {
            // this.pages += 1;
            this.pageUpdate();
            // console.log(this.pages);
            window.scrollTo(0, 0);
        },
        pageUpdate: function () {
            var self = this;
            axios.get(`https://swapi.co/api/people/?page=${this.pages}`)
            .then(function (response) {
                self.peoples = response.data.results;
                
                // console.log(response.data.results);
                
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        },
        
    }
    
};
</script>