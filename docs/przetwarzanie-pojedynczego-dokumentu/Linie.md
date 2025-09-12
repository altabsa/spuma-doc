---
sidebar_position: 6
id: Linie
title: Linie
---

# Linie dokumentu   

Zakładka **Linie** służy do wprowadzania szczegółowych pozycji dokumentu.  
Na początku lista jest pusta – widać jedynie pole wyszukiwania i informację **Do rozliczenia: 0.00**.  

![Pusta lista linii](/img/linie1.png)  

---

## Dodawanie linii  

Aby dodać nową pozycję:  

1. Kliknij przycisk **+** po prawej stronie.  
2. Pojawi się nowy wiersz do uzupełnienia.  

![Dodaj linię](/img/linie2.png)  

W polach wprowadzamy m.in.:  
- **Towar** – wpisz kod lub fragment nazwy. Kliknięcie ikony z podwójnym kwadracikiem pozwala wyszukać indeksy dostępne w SAP.  
- **Kwota** – podaj wartość przypisaną do pozycji i wciśnij enter, żeby dodać.  
- **Projekt / Centrum kosztów** / **...** – w zależności od konfiguracji klasy dokumentu.  

### Inne sposoby dodawania linii  

Oprócz ręcznego wprowadzania, linie mogą być również uzupełnione w inny sposób:  

- [**Wczytaj z pliku**](#menu-operacji) – import linii z pliku (np. Excel).  
- [**Kopiuj z dokumentu bazowego**](#menu-operacji) – przeniesienie linii z powiązanego dokumentu (np. zamówienia zakupu).  [Kopiuj z dokumentu bazowego](#kopiuj-z-dokumentu-bazowego)
- [**Kopiuj do linii**](../przetwarzanie-pojedynczego-dokumentu/OCR.md) – kopiowanie danych z rozpoznanego OCR bezpośrednio do linii dokumentu.  

---

## Menu operacji  

Kliknięcie ikony **trzech kresek** (menu operacji) otwiera listę dodatkowych funkcji:  

![Menu operacji w liniach](/img/linie3.png)  

Dostępne opcje to:  

- **Zapisz do pliku** – kliknij, aby wyeksportować linie dokumentu do pliku Excel.  
- **Wczytaj z pliku** – kliknij, aby zaimportować linie z pliku.  
   + Najpierw otwiera się okno **Parametry importu**, gdzie wybierasz:  
      - czy pierwszy wiersz zawiera nagłówki,  
      - znak rozdzielenia (np. ;),  
      - identyfikator tekstu.  

      ![Parametry importu](/img/linie4.png)  

   + Następnie przechodzisz do okna **Mapowanie kolumn** – możesz przypisać kolumny z pliku do pól dokumentu (np. Towar, Kwota, Projekt, Centra kosztów).  
      Jeśli jakaś kolumna nie jest potrzebna, wybierz opcję, aby jej **nie kopiuj**.  

      ![Mapowanie kolumn](/img/linie5.png)  

- **Usuń zaznaczone linie** – zaznacz linie na liście i usuń je jednym kliknięciem.  
- **Kopiuj z dokumentu bazowego** <a id="kopiuj-z-dokumentu-bazowego"></a>– opcja ta odblokowuje się dopiero wtedy, gdy w zakładce **Atrybuty** został uzupełniony **dokument bazowy**. 

   1. W atrybutach, w polu *Dokument bazowy* wybierz typ dokumentu (np. **ZZ** – zamówienie zakupu, **PZ** – przyjęcie zewnętrzne lub inny w zależności od klasy dokumentu).  
      ![Wybór dokumentu bazowego](/img/linie10.png)  

   2. Wpisz numer dokumentu – jeśli go znasz, możesz wpisać go bezpośrednio.  
      Możesz też kliknąć ikonę **podwójnego kwadratu**, aby otworzyć okno wyszukiwania.  

   3. Kliknij ikonę lupki – system załaduje listę dostępnych dokumentów z SAP. Możesz również dopisać frazę, żeby zawęzić wyszukiwanie dokumentów.
      ![Lista zamówień](/img/linie11.png)  

   4. Wybierz odpowiedni dokument i kliknij **Wybierz**.  
      Wyświetli się jego szczegółowy podgląd z listą pozycji.  

      ![Podgląd dokumentu bazowego](/img/linie12.png)  

   5. Wróć do zakładki **Linie**, otwórz **menu operacji** i wybierz **Kopiuj z dokumentu bazowego**.  
      Linie z wybranego dokumentu bazowego zostaną automatycznie uzupełnione.  
 
- **Księguj w SAP** – dostępne dopiero po zakończeniu autoryzacji. Kliknij jeśli chesz dodać dokument do SAP jako dokument tymczasowy.

   1. Kliknij **Księguj w SAP**.  
   2. System wyświetli komunikat z pytaniem, czy dodać dokument jako tymczasowy.  
      ![Komunikat – dokument tymczasowy](/img/linie7.png)  
   3. W trakcie dodawania wyświetlany jest ekran ładowania:  
      ![Ładowanie danych](/img/linie8.png)  
   4. Po dodaniu dokument trafia do SAP – do dokumentów tymczasowych.  
      Zazwyczaj w polu *Uwagi* widnieje adnotacja, że dokument został dodany przez SPUMĘ.  

      **Komunikaty i błędy**
      - Jeśli nie zostały uzupełnione wszystkie wymagane pola (np. kod kontrahenta), dokument **nie zostanie dodany** i pojawi się stosowny komunikat.  
      - Jeżeli spróbujesz dodać dokument ponownie, SPUMA poinformuje, że taki dokument SAP już istnieje i zapyta, czy chcesz dodać kolejny.  
      ![Komunikat – dokument już istnieje](/img/linie9.png)  

- **Zaproponuj** – system może automatycznie podpowiedzieć wartości dla pozycji dokumentu.  

⚠️ Opcje wyszarzone są w danym momencie niedostępne.  

---

## Ważne informacje  

- Pole **Do rozliczenia** pokazuje różnicę między:  
  - **wartością netto dokumentu** wpisaną w zakładce **Atrybuty**,  
  - a **sumą wartości wprowadzonych linii**.  

- Dzięki temu użytkownik na bieżąco widzi, czy wszystkie kwoty zostały prawidłowo rozdysponowane.  

- Linie mogą być również dodawane automatycznie przez mechanizm **OCR** – szczegóły znajdziesz w sekcji OCR.  

---
