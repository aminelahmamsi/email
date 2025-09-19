import { Component } from '@angular/core';

export interface Email {
    from: string;
    to: string;
    subject: string; 
    body: string | null;
}
