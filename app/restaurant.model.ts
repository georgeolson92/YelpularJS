import { Component } from 'angular2/core';

export class Restaurant {
  constructor(public name: string, public specialty: string, public address: string, public priceLevel: number, public rating: number){}
}
