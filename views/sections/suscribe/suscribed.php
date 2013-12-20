<?php if (isset($_GET['suscribed'])) { ?>
  <!-- Modal -->

  <div class="modal fade" id="modal-sent" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        </div>
        <div class="modal-body">
          <h3>¡Enhorabuena!</h3>
          <p>Te hemos dado de alta correctamente en la base de datos de Sexy English. A partir de ahora podremos enviarte correos manteniéndote al tanto de la evolución de nuestro proyecto.
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="boton btn-claro btn btn-primary" data-dismiss="modal">Ok, comprendido</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->
<?php } ?>