//import CSS
import './editor.scss';

//Import block registration API form WordPress
import { registerBlockType } from "@wordpress/blocks";

//Collect blocks during registration
const AllBlocks = {};

//Register blocks
//Register Alert block
import { AlertBlockBlockName,AlertBlock } from "./alertBlock";

registerBlockType(AlertBlockBlockName,AlertBlock);
AllBlocks[AlertBlock] = AlertBlockBlockName;

//Dispatch action after blocks are registered
wp.hooks.doAction( 'calderaLearn.alertBlock.registered', AllBlocks );

