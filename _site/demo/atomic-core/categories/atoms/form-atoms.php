<div class="ad_fileFormGroup">
    <form id="form-create-file" class="ad_fileForm " action="/atomic-core/atoms.php" method="post">
     
      <div class="inputGroup">
        <label class="ad_label">What's your component's name?</label>
        <input type="text" class="form-control" name="fileCreateName">
      </div>
        <label class="ad_label">Component description.</label>
        <textarea class="form-control" name="compNotes"></textarea>
        <button class="ad_btn ad_btn-pos" type="submit" >Add</button>
      <input type="hidden" name="compDir" value="atoms"/>
      <input type="hidden" name="create" value="create"/>
    </form>
</div>