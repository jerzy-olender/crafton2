<?php
header('Content-Type: text/html; charset=UTF-8');
include __DIR__ . '/../data/guides.php';

$page    = isset($_POST['page']) ? (int) $_POST['page'] : 1;
$perPage = 3;

$items = array_slice($guides, ($page - 1) * $perPage, $perPage);

if ($items) {
    foreach ($items as $item) {
        $img   = $item['image'];         // kontrolowane dane → nie eskapujemy HTML-u w title
        $title = $item['title'];         // może zawierać <br> i &nbsp;
        $link  = $item['link'];
        ?>
        <div class="item">
            <img class="img-fluid" src="<?php echo $img; ?>" alt="real estate item image" loading="lazy">
            <h3 class="item-heading"><?php echo $title; ?></h3>
            <a href="<?php echo $link; ?>" class="item-button">
              PRZEJDŹ DO ARTYKUŁU
              <img class="button-arrow" src="images/button-arrow.svg" alt="button arrow">
            </a>
        </div>
        <?php
    }
}