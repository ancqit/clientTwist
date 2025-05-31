import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TooltipModule } from 'primeng/tooltip';
import { Dock } from 'primeng/dock';

@Component({
  selector: 'app-dock',
  imports: [Dock, RadioButtonModule, CommonModule, FormsModule, TooltipModule],
  templateUrl: './dockScreen.html',
  styleUrl: './dockScreen.scss',
  standalone: true,
})
export class DockScreen implements OnInit {
   items: MenuItem[] | undefined;

    position: 'left' | 'right' | 'top' | 'bottom' = 'bottom';

    positionOptions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];

    ngOnInit() {
        this.items = [
            {
                label: 'Finder',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg'
            },
            {
                label: 'App Store',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg'
            },
            {
                label: 'Photos',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg'
            },
            {
                label: 'Trash',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png'
            }
        ];
    }

}
