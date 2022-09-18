<template>
<div class="demo">
    <!-- color -->
    <div class="deep-purple accent-1 text-center">
        <span class="white--text text-h3">Vuetify</span>
        <v-row class="d-flex justify-space-around">
        <v-col cols="auto">
            <v-card width="200" height="200" class="overflow-auto ma-5">
                <v-card-text>
                    <h3>Overflow Auto</h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                    facilis dicta esse molestias vero hic laudantium provident nisi eos
                    quasi iusto alias sequi, aut aliquid voluptatibus commodi! Minima, eum
                    voluptates?
                </v-card-text>
            </v-card>
            <v-btn depressed color="pink lighten-1" class="white--text" >Read More</v-btn>
        </v-col>
        <v-col cols="auto">
            <v-card width="200" height="200" class="overflow-auto ma-5">
                <v-card-text>
                    <h3>Overflow Hidden</h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                    facilis dicta esse molestias vero hic laudantium provident nisi eos
                    quasi iusto alias sequi, aut aliquid voluptatibus commodi! Minima, eum
                    voluptates?
                </v-card-text>
            </v-card>
            <v-btn depressed color="pink lighten-1" class="white--text" >Read More</v-btn>
        </v-col>
        <v-col cols="auto">
            <v-card width="200" height="200" class="overflow-auto ma-5">
                <v-card-text>
                    <h3>Overflow visible</h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                    facilis dicta esse molestias vero hic laudantium provident nisi eos
                    quasi iusto alias sequi, aut aliquid voluptatibus commodi! Minima, eum
                    voluptates?
                </v-card-text>
            </v-card>
            <v-btn depressed color="pink lighten-1" class="white--text" >Read More</v-btn>
        </v-col>
    </v-row>
    <v-row class="d-flex justify-space-around">
    <v-card class="mx-auto" max-width="400">
        <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            <v-card-title>Top 10 Australian beaches</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>
        <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>
            <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>
        <v-card-actions>
            <v-btn color="orange" text> Share </v-btn>
            <v-btn color="orange" text> Explore</v-btn>
        </v-card-actions>
    </v-card>

    <v-card class="mx-auto" max-width="400">
        <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            <v-card-title>Top 10 Australian beaches</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>
        <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>
            <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>
        <v-card-actions>
            <v-btn color="orange" text> Share </v-btn>
            <v-btn color="orange" text> Explore</v-btn>
        </v-card-actions>
    </v-card>

    <v-card class="mx-auto" max-width="400">
        <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            <v-card-title>Top 10 Australian beaches</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>
        <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>
            <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>
        <v-card-actions>
            <v-btn color="orange" text> Share </v-btn>
            <v-btn color="orange" text> Explore</v-btn>
        </v-card-actions>
    </v-card>
    </v-row>
    



    <v-row justify="space-around" class="ma-5">
        <v-col cols="auto">
            <v-dialog transition="dialog-bottom-transition" max-width="600">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" v-bind="attrs" v-on="on">Open</v-btn>
                </template>
                <template v-slot:default="dialog">
                    <v-card>
                        <v-toolbar color="primary" dark>Opening from the bottom</v-toolbar>
                        <v-card-text>
                            <div class="text-h2 pa-12">Hello world!</div>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                            <v-btn text   @click="dialog.value = false">Close</v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>
        </v-col>
    </v-row>

    


</div>
    <!-- border radius  -->
    <!-- <v-row class="pa-10 ma-10">
        <v-col clos="12" md="3">
            <div class="pa-4 text-center deep-purple accent-1 text-no-wrap rounded-lg">rounded-sm</div>
        </v-col>
    </v-row> -->
    <!-- display-helper -->
    <!-- <div class="d-table pa-2 ma-2 pink lighten-1 text-center white--text">
        Anik Das
    </div>  -->
    <!-- elevation -->
    <!-- <v-container>
        <v-row justify="center">
            <v-col v-for="n in 1" :key="n" cols="auto">
                <v-card :elevation="23" height="100"  width="100" class="light-blue lighten-3">
                    <v-row class="fill-height" align="center"  justify="center" v-text="n - 1">
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container> -->

    <!-- <div class="text--primary">
        <v-hover>
            <template v-slot:default="{ hover }">
                <v-card :elevation="hover ? 20 : 1" class="pa-6 ma-10 text-center deep-purple lighten-2">
                    Prop based elevation
                </v-card>
            </template>
        </v-hover>
    </div> -->

    <!-- overflow -->
    <!-- <v-row>
        <v-col cols="auto">
            <v-card width="200" height="200" class="overflow-auto ma-5">
                <v-card-text>
                    <h3>Overflow Auto</h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                    facilis dicta esse molestias vero hic laudantium provident nisi eos
                    quasi iusto alias sequi, aut aliquid voluptatibus commodi! Minima, eum
                    voluptates?
                </v-card-text>
            </v-card>
        </v-col>
    </v-row> -->

    <!-- Transitions -->
    <!-- <v-row justify="center">
        <v-menu transition="scroll-y-transition">
            <template  v-slot:activator="{ on, attrs }">
                <v-btn color="primary" class="ma-2" v-bind="attrs"  v-on="on">
                    Slide X Transition
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="n in 5"  :key="n" link>
                    <v-list-item-title v-text="'Item ' + n" ></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-row> -->

    <!-- alert -->
    <!-- <div>
        <v-alert border="right" colored-border type="error" elevation="5" class="ma-3">
            I'm an alert with a top border and red color
        </v-alert>
    </div>
    <div>
        <div class="text-center mb-4">
            <v-btn  color="primary"  @click="alert = !alert">Toggle</v-btn>
        </div>
        <v-alert :value="alert" color="pink" dark border="top" icon="mdi-home" transition="scale-transition">
            Hi I am Anik Das
        </v-alert>
    </div> -->

    <!-- Avatar -->
    <!-- <v-avatar color="indigo" size="50" class="ma-10 ">
        <span class="white--text text-h5">50</span>
    </v-avatar> -->

</div>    
</template>


<script>
    export default {
      name: "MainSection",
    }
  </script>


<script lang="scss">

</script>