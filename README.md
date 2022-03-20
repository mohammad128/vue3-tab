# Vue 3 Tab

------------

###    Preview
[![Preview](https://github.com/mohammad128/vue3-tab/raw/main/demo.gif "Preview")](https://github.com/mohammad128/vue3-tab "Preview")
------------
# Installation
    npm i vue3-tab

------------

# Usage
```javascript
//app.js
import Vue3Tab from 'vue3-tab';
...
app.use(Vue3Tab);
```
```javascript

<Tab>
	<TabItem title="`Tab1`"  active>
		<p >Tab1 Content</p>
	</TabItem> 
	<TabItem title="`Tab2`" >
		<p >Tab2 Content</p>
	</TabItem> 
</Tab>
```
### or 

```javascript

<Tab lazy-load>
	<TabItem title="`Tab1`"  active>
		<p >Tab1 Content</p>
	</TabItem> 
	<TabItem title="`Tab2`" >
		<p >Tab2 Content</p>
	</TabItem> 
</Tab>
```