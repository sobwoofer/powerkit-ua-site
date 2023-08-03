 <?php 
          $gDocBaseURL = 'https://docs.google.com/spreadsheets/d/';
          $gDID = '1CEQsUVfJFMx7zCAHLm2KPGLSjaNSNxfMk7107ZH2ae8';
          $sheetName = 'Sheet1';
          $range = 'B5:C5';

          $accessLink = $gDocBaseURL . $gDID . '/gviz/tq?sheet=' . $sheetName . '&range=' . $range;
          $gDocJson = substr(file_get_contents($accessLink), 47, -2);
          $gDocArr = json_decode($gDocJson, TRUE);
          $targetDataArr = $gDocArr['table']['rows'][0]['c'];
          $amountPowerBanks = $targetDataArr[0]['v'];
          $amountCigarettes = $targetDataArr[1]['v'];
?>
<section class="section-amount section">
  <div class="container container-amount">
    <h2 data-lng="amount-numbers-title-h2" class="hidden-element">
      Наші досягнення
    </h2>
    <ul class="amount-list">
      <li class="amount-item">
        <h3 data-lng="amount-numbers-pw" class="amount-item-title">
          <span class="amount-item-title-sp">Кількість</span>
          зроблених паверів
        </h3>
        <span class="amount-item-numbers text-accent"
          ><span data-digits-couter data-max="<?= $amountPowerBanks;?>"><?= $amountPowerBanks;?></span>+</span
        >
        <p data-lng="amount-discription-pw" class="amount-item-discription">
          Всі повербанки розʼїхались по різним бригадам та підрозділам Збройних
          Сил України і допомогають нашим військовим завжди залишатись із
          електроенергією.
        </p>
      </li>
      <li class="amount-item">
        <h3 data-lng="amount-numbers-sm" class="amount-item-title">
          <span class="amount-item-title-sp">Кількість</span>
          перероблених цигарок
        </h3>
        <span class="amount-item-numbers blue-number"
          ><span data-digits-couter data-max="<?= $amountCigarettes;?>"><?= $amountCigarettes;?></span>+</span
        >
        <p data-lng="amount-discription-sm" class="amount-item-discription">
          Для виробництва повербанків ми використовуємо акумулятори з
          електронних сигарет. Інші комплектуючі цигарок ми утилізуємо за
          допомогою наших партнерів.
        </p>
      </li>
    </ul>
  </div>
</section>
