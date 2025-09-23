---
sidebar_position: 3
id: ogolne
title: Ogólne
---

# Ogólne  

Zakładka **Ogólne** zawiera podstawowe informacje o dokumencie. Część pól użytkownik uzupełnia samodzielnie, a część jest generowana automatycznie przez system. Najważniejszym polem w tej sekcji jest **Typ dokumentu (Klasa dokumentu)**. 

![Widok zakładki Ogólne](/img/ogolne.png)  
---

## Typ (Klasa dokumentu)  

- Dokument, który trafia do **Sekretariatu**, **nie ma przypisanej klasy**.  
- Użytkownik musi samodzielnie wybrać odpowiednią klasę z listy rozwijanej.  
- **Klasy dokumentów są przygotowywane indywidualnie dla każdego klienta**, zgodnie z jego potrzebami biznesowymi.  

Na podstawie wybranej klasy:  
- otwierają się odpowiednie **atrybuty**,  
- określane są odpowiednie schematy do obiegu.  

**Standardową klasą jest „Faktura”** – obejmuje ona wszystkie dokumenty typu fakturowego (np. faktura kosztowa, faktura sprzedaży).  
Inne klasy są definiowane zgodnie z potrzebami klienta (np. Zamówienie zakupu, Umowa, Wniosek).  

---

## Pozostałe pola do uzupełnienia  
 
- **Nazwa** – nazwa dokumentu. Domyślnie nadawana automatycznie, ale można ją zmienić ręcznie lub wygenerować ponownie za pomocą przycisku ![Generuj nazwę](/img/generuj_nazwe.png) znajdującego się po prawej stronie pola.   
- **Opis** – pole tekstowe do wprowadzenia dodatkowych informacji.  
- **Numer** – numer dokumentu.  
- **Data dokumentu** – data wystawienia dokumentu.  
- **Wpłynął** – data wpływu dokumentu do systemu.  

---

## Pola informacyjne  

- **Data utworzenia** – dokładna data i godzina dodania dokumentu do systemu.  
- **Firma** – nazwa firmy, w której kontekście działa użytkownik.  
- **Właściciel** – użytkownik odpowiedzialny za dokument.  
- **Katalog** – aktualne miejsce, w którym znajduje się dokument (np. Sekretariat, Repozytorium).
- **Dokumenty zewnętrzne**  
- **Unikatowy identyfikator** – numer techniczny przypisany do dokumentu w systemie.

---
## Dokumenty zewnętrzne  

Jeśli dokument w SPUMA został dodany również w **SAP** (już jako właściwy dokument, a nie tylko tymczasowy), w zakładce **Ogólne** pojawia się sekcja **Dokumenty zewnętrzne**.  

Po kliknięciu w link otwiera się okno z listą dokumentów zewnętrznych:  
- widać podstawowe informacje (np. numer faktury, datę, kwotę, nadawcę),  
- można kliknąć wybrany dokument, aby zobaczyć jego szczegóły,  
- dostępny jest przycisk **Odśwież dane**, który pobiera aktualne dane z SAP.  

![Lista dokumentów zewnętrznych](/img/ogolne2.png)  

Po otwarciu dokumentu widać pełne szczegóły zapisane w SAP, np.:  
- numer faktury, datę i termin,  
- nabywcę, osobę odpowiedzialną, kwotę,  
- dodatkowe uwagi,  
- linie dokumentu (opis, ilość, ceny netto/brutto).  

![Szczegóły dokumentu zewnętrznego](/img/ogolne3.png)  
