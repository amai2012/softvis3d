/*
 * SoftVis3D Sonar plugin
 * Copyright (C) 2015 Stefan Rinderle
 * stefan@rinderle.info
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02
 */
goog.provide('ThreeViewer.Config');

/**
 * @param {angular.$locationProvider} $locationProvider
 * @constructor
 * @ngInject
 */
ThreeViewer.ConfigLocation = function ($locationProvider) {
  $locationProvider.html5Mode = true;
};

/**
 * @param {angular.$routeProvider} $routeProvider
 * @constructor
 * @ngInject
 */
ThreeViewer.ConfigRouters = function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: RESOURCES_BASE_PATH + '/static/softvis3d/threeViewer/partials/viewer.html'
  }).otherwise({
    redirectTo: '/'
  });
};