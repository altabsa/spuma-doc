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
- **Kwota** – podaj wartość przypisaną do pozycji.  
- **Projekt / Centrum kosztów** / **...** – w zależności od konfiguracji klasy dokumentu.  

---

## Menu operacji  

Kliknięcie ikony **trzech kresek** (menu operacji) otwiera listę dodatkowych funkcji:  

![Menu operacji w liniach](/img/linie3.png)  

Dostępne opcje to:  

- **Zapisz do pliku** – kliknij, aby wyeksportować linie dokumentu do pliku Excel.  
- **Wczytaj z pliku** – kliknij, aby zaimportować linie z pliku.  
   + Najpierw otwiera się okno **Parametry importu**, gdzie wybierasz:  
      - czy pierwszy wiersz zawiera nagłówki,  
      - znak rozdzielenia (np. `;`),  
      - identyfikator tekstu.  

      ![Parametry importu](/img/linie4.png)  

   + Następnie przechodzisz do okna **Mapowanie kolumn** – możesz przypisać kolumny z pliku do pól dokumentu (np. Towar, Kwota, Projekt, Centra kosztów).  
      Jeśli jakaś kolumna nie jest potrzebna, wybierz opcję, aby jej **nie kopiuj**.  

      ![Mapowanie kolumn](/img/linie5.png)  

- **Usuń zaznaczone linie** – zaznacz linie na liście i usuń je jednym kliknięciem.  
- **Kopiuj z dokumentu bazowego** – pozwala przenieść linie z dokumentu, na podstawie którego tworzony jest bieżący (np. zamówienie → faktura) ??.  
- **Księguj w SAP** – dostępne dopiero po zakończeniu autoryzacji. Kliknij jeśli chesz dodać dokument do SAP.
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
