/**
 Licensed to the Apache Software Foundation (ASF) under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  The ASF licenses this file
 to you under the Apache License, Version 2.0 (the
 "License"); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at
*
     http://www.apache.org/licenses/LICENSE-2.0
*
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

define(['react',
 'react-dom'],
 function(React, ReactDOM) {
	'use strict';
    return React.createClass({
		displayName: 'Breadcrumbs',
        propTypes: {
            links: React.PropTypes.array.isRequired
        },
		getInitialState: function() {
			return null;
		},
		render: function() {			
			return (
				<ol id="breadcrumb">
					{this.renderLinks()}					
				</ol>
			);
    	},
    	renderLinks: function() {
    		var links = [];
    		for(var i = 0; i < this.props.links.length; i++){
    			var object = this.props.links[i];
    			if(object.link === '#!/dashboard'){
    				object.title = <i className="fa fa-home"></i>
    			}
    			links.push(<li key={i}><a href={object.link}>{object.title}</a></li>);
    		}    		
			return links;
    	}
    }); 
});