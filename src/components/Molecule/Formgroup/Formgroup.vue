<template>
  <div class="form-group">
    <Content 
        :as="labelAs ? labelAs:'label'"
        :textClass="contentClass"
        :tagFor="Textbox.id ? Textbox.id : Textbox.name">
        <slot></slot>
    </Content>

    <Textbox :class="Textbox.textboxClass"
    :type="Textbox.type"
    :placeholder="Textbox.placeholder"
    :name="Textbox.name ? Textbox.name : Textbox.id"
    :id="Textbox.id ? Textbox.id : Textbox.name"
    :readonly="Textbox.readonly"
    :disabled="Textbox.disabled"
     @inputVal="getInput"
    :value="Textbox.value"></Textbox>
    
  </div>
</template>
<script src="./Formgroup.js"></script>