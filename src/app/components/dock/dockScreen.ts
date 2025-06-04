import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TooltipModule } from 'primeng/tooltip';
import { Dock } from 'primeng/dock';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dock',
  imports: [RouterModule, Dock, RadioButtonModule, CommonModule, FormsModule, TooltipModule],
  templateUrl: './dockScreen.html',
  styleUrl: './dockScreen.scss',
  standalone: true,
})





export class DockScreen implements OnInit {
/**
 * An array of menu items to be displayed in the dock.
 * 
 * @remarks
 * This property may be undefined if no menu items are available.
 *
 * @type {MenuItem[] | undefined}
 */
   items: MenuItem[] | undefined;

    /**
     * Specifies the position of the dock on the screen.
     * 
     * Possible values are:
     * - `'left'`: Dock is positioned on the left side.
     * - `'right'`: Dock is positioned on the right side.
     * - `'top'`: Dock is positioned at the top.
     * - `'bottom'`: Dock is positioned at the bottom (default).
     */
    position: 'left' | 'right' | 'top' | 'bottom' = 'bottom';

    /**
     * An array of position option objects for the dock screen component.
     * Each option contains a `label` for display and a `value` representing the dock position.
     *
     * Possible positions:
     * - 'Bottom'
     * - 'Top'
     * - 'Left'
     * - 'Right'
     */
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

    /**
     * Angular lifecycle hook that is called after the component's data-bound properties have been initialized.
     * 
     * Initializes the `items` array with a list of dock items, each containing a label, router link, and icon URL.
     * These items are used to render the dock menu in the component's template.
     */
    ngOnInit() {
        this.items = [
            {
                label: 'Finder',
                routerLink:'/translate',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg'
            },
            {
                label: 'App Store',
                routerLink:'/data',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg'
            },
            {
                label: 'Photos',
                routerLink:'/about',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg'
            },
            {
                routerLink:'/stepper',
                label: 'Trash',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png'
            }
        ];
    }

}
