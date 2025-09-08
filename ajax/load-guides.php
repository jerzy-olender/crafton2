<?php
header('Content-Type: text/html; charset=UTF-8');

include __DIR__ . '/../data/guides.php';

$page    = isset($_POST['page']) ? (int) $_POST['page'] : 1;
$perPage = 3;

$items = array_slice($guides, ($page - 1) * $perPage, $perPage);

if ($items) {
    foreach ($items as $item): ?>
        <div class="item">
            <img class="img-fluid"
                 src="<?php echo $item['image']; ?>"
                 alt="real estate item image">
            <h3 class="item-heading">
                <?php echo $item['title']; ?>
            </h3>
            <a href="<?php echo $item['link']; ?>" class="item-button">
                PRZEJDŹ DO ARTYKUŁU
            </a>
        </div>
    <?php endforeach;
}
