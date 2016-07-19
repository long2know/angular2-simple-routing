/// <reference path="../typings/globals/es6-shim/index.d.ts" />
import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: "app-shell",
    templateUrl: "/home/MainComponent",
    directives: [ROUTER_DIRECTIVES]
})

export class Main {
    title: string;
    constructor() {
        this.title = "World!";
    }
}