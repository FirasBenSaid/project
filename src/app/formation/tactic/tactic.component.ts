
import {Component} from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop boundary
 */
@Component({
  selector: 'app-tactic',
  templateUrl: './tactic.component.html',
  styleUrls: ['./tactic.component.css'],
  standalone: true,
  imports: [CdkDrag],
})
export class TacticComponent{}
