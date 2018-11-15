import Component from '@ember/component';
import { computed } from "@ember/object";

export default Component.extend({
    
    form: computed(function(){
        return {
            "content": null
        }
    }),

    toolbarOptions: [
        "bold",
        "italic",
        "strikeThrough"
    ],

    actions: {
     
      submitForm() {
        const form = this.get('form')
      }
    }    
});
