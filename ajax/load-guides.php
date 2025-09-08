<?php
include __DIR__ . '/../data/guides.php';

$page = isset($_POST['page']) ? (int) $_POST['page'] : 1;
$perPage = 3;

$offset = ($page - 1) * $perPage;
$items = array_slice($guides, $offset, $perPage);

foreach($items as $item): ?>
  <div class="item">
    <img src="<?php echo $item['image']; ?>" alt="real estate item image">
    <h3 class="item-heading"><?php echo $item['title']; ?></h3>
    <a href="<?php echo $item['link']; ?>" class="item-button">PRZEJDŹ DO ARTYKUŁU</a>
  </div>
<?php endforeach; ?>
