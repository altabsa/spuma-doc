---
sidebar_position: 2
id: Zatwierdzenia-dostepu
title: Zatwierdzenia dostępu
---

# Zatwierdzenia dostępu  

Raport **Zatwierdzenia dostępu** to standardowy raport w SPUMA.  
Służy do obsługi sytuacji, gdy użytkownik próbuje otworzyć dokument, do którego **nie ma uprawnień**.  

---

## Jak powstają wpisy w raporcie?  

Czasem zdarza się, że użytkownik otrzyma link do dokumentu, ale nie ma do niego dostępu.  
Może to być np. sytuacja, gdy inny pracownik wysłał mu link w wiadomości.  

1. Użytkownik klika link do dokumentu.  
2. Pojawia się komunikat:  

   - **Nie masz uprawnień do tego dokumentu** – w tym momencie można wybrać:  
     - **OK** – zamknąć okno i zrezygnować,  
     - **Poproś o dostęp** – wysłać prośbę do osoby uprawnionej.  

   ![Brak dostępu](/img/dostep.png)  

3. Po wysłaniu prośby użytkownik dostaje potwierdzenie:  

   ![Dokument oczekuje na autoryzację](/img/dostep2.png)  

---

## Raport zatwierdzeń  

Osoby uprawnione do nadawania dostępu widzą zgłoszone prośby w raporcie **Zatwierdzenia dostępu**.  

- Każdy wpis zawiera:  
  - ID prośby,  
  - nadawcę (użytkownika, który poprosił o dostęp),  
  - ID dokumentu i jego nazwę,  
  - status (Oczekuje / Przyznano / Zabroniono),  
  - zatwierdzającego,  
  - datę modyfikacji.  

![Lista próśb o dostęp](/img/dostep3.png)  

---

## Decyzja o dostępie  

Szczegóły każdej prośby (nadawca, dokument, status, data modyfikacji) widoczne są bezpośrednio w raporcie. Dodatkowo możesz przejść z niego do podglądu dokumentu.  

Aby podjąć decyzję o dostępie:  

1. Kliknij **ID wpisu** przy wybranej prośbie.  
2. W oknie **Zmiana dostępu** wybierz jedną z opcji:  
   - **Przyznaj** – użytkownik uzyska dostęp,  
   - **Zabroń** – dostęp zostanie odrzucony,  
   - **Anuluj** – zamknij okno bez decyzji.  

:::tip[Zrób to przed nadaniem dostępu!]  
Zanim przyznasz dostęp, **kliknij ID dokumentu**.  
W nowej zakładce otworzy się jego podgląd – możesz w ten sposób szybko sprawdzić, czego dotyczy prośba.  
:::

![Zmiana dostępu](/img/dostep4.png)  

---

## Ważne informacje  

- Użytkownik **nie dostaje automatycznego powiadomienia** o decyzji w sprawie dostępu.  
- Dlatego najlepiej wysłać mu informację o wyniku decyzji (np. w wiadomości SPUMA lub mailowo).  

---
