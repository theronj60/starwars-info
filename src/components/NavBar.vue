<template>
    <div>
        <v-toolbar>

        <v-toolbar-title>
            <v-btn to="/">Star Wars Cards</v-btn> 
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <template>
            <v-btn to="/about">
            About
            </v-btn>
            <v-btn to="/game">
            Game
            </v-btn>
            <v-btn to="/learn">
            Learn
            </v-btn>
        </template>
        </v-toolbar-items>
        
        </v-toolbar>
    </div>
</template>