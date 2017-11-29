/**
 * Created by Bob on 01-09-2015.
 */
import { Meteor } from 'meteor/meteor';

import { check } from 'meteor/check';
/*
import {Tactic} from  '../imports/api/tactic/tactic';
import {French} from '../imports/api/french/french';
import {English} from  '../imports/api/english/english'
*/
Meteor.subscribe("filteredTactics");
Meteor.subscribe(('allTactics'));
Meteor.subscribe(('allEnglish'));
Meteor.subscribe(('allFrench'));

