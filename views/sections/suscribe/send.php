<?php if (isset($_GET['suscribe'])) { ?>
  <!-- Modal -->

  <div class="modal fade" id="modal-sent" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        </div>
        <div class="modal-body">
          <h3>Ahora debes confirmar la suscripción en tu correo</h3>
          <p>En tu buzón de entrada recibirás un correo de Sexy English. Verás un botón para confirmar que quieres unirte a nuestra lista de aspirantes a <i>sexy students</i> ;)
        </div>
        <div class="modal-footer">
          <button type="button" class="boton btn-claro btn btn-primary" data-dismiss="modal">Ok, comprendido</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->
<?php } ?>