import angular from 'angular';import ErrorComponent from './error.component.js';let ErrorModule = angular.module('error-module', [])	.component("mbError", ErrorComponent)	.name;	export default ErrorModule;