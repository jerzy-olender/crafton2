<?php include __DIR__ . '/../data/guides.php'; ?>

<section class="real-estates">
  <div class="container">
    <h2 class="real-estates-heading">PORADNIK PO NIERUCHOMOŚCIACH</h2>
    <div class="items">
      <?php foreach(array_slice($guides, 0, 3) as $item): ?>
        <div class="item">
          <img class="img-fluid" src="<?php echo $item['image']; ?>" alt="real estate item image">
          <h3 class="item-heading"><?php echo $item['title']; ?></h3>
          <a href="<?php echo $item['link']; ?>" class="item-button">
            PRZEJDŹ DO ARTYKUŁU
          </a>
        </div>
      <?php endforeach; ?>
    </div>
    <button class="load-more">Załaduj więcej</button>
  </div>
</section>
