---
sidebar_position: 3
id: wyszukiwanie-kontekstowe
title: Wyszukiwanie kontekstowe
---

# Wyszukiwanie kontekstowe (obszar roboczy)

Wyszukiwanie kontekstowe to mechanizm dostępny **wewnątrz obszaru roboczego**, po wejściu do konkretnej sekcji z menu głównego (np. Repozytorium → SAP, KSEF, itp.).

---

## Gdzie znajduje się pasek wyszukiwania?

Pojawia się automatycznie w dolnej części obszaru roboczego. Składa się z kilku ikon funkcjonalnych:

| Ikona | Funkcja | Opis |
|-------|---------|------|
| ![Wyszukaj](/img/szukaj3.png) | Wyszukaj | Wprowadź słowa kluczowe, by przeszukać dokumenty tylko w bieżącej lokalizacji. |
| ![Sortuj](/img/sortuj.png) | Sortowanie | Umożliwia zmianę kolejności wyników (np. alfabetycznie, po dacie, właścicielu). |
| ![Filtr](/img/filtr3.png) | Filtry | Umożliwia zaawansowane filtrowanie wyników według typu, właściciela, statusu itd. |
| ![Usun_filtr](/img/usun_filtr.png)      ![Usun_filtr](/img/usun_filtr2.png) | Wyczyść filtry | **Niebieska** ikona oznacza aktywne filtry – kliknij, aby je usunąć. **Szara** ikona oznacza brak aktywnych filtrów.|

---
## Filtry kontekstowe

Filtry otwierają się po kliknięciu ikony lejka. W zależności od kontekstu (repozytorium/folderu). Działają identycznie jak w wyszukiwaniu globalnym. Mogą zawierać takie sekcje jak:

- **Klasy**
- **Schemat**
- **Użytkownik**
- **Status autoryzacji**
- **Kontrahent**
- **Metoda płatności**
- **Waluta**
- **Pozostałe**:
  - `Data płatności od`,
  - `Data płatności do`,
  - `Wartość brutto od`,
  - `Wartość brutto do`.

![Filtr-kontekstowy](/img/filtr_kontekstowy_7_7.png)

Na liście dokumentów **Oczekujących** w sekcji **Pozostałe** dostępne są dodatkowo filtry:

- **Tylko pilne** — wyświetla tylko dokumenty oznaczone jako pilne,
- **Tylko zastępstwa** — wyświetla tylko dokumenty obsługiwane w ramach zastępstwa,
- **Tylko zablokowane** — wyświetla tylko dokumenty zablokowane.

Dodatkowe filtry są dostępne wyłącznie na liście dokumentów **Oczekujących** i tylko wtedy, gdy na liście znajdują się dokumenty odpowiadające danemu statusowi.

<img
  src={require('@site/static/img/filtr_kontekstowy_pozostale_7.8.png').default}
  alt="Filtr-kontekstowy-pozostale"
  style={{ width: '35%', height: 'auto' }}
/>

---
## Wyszukiwanie po identyfikatorze dokumentu

Wyszukiwanie kontekstowe umożliwia również wyszukiwanie dokumentów po ich **unikatowym identyfikatorze (ID)**.

Aby wyszukać dokument po identyfikatorze:

1. Kliknij pole wyszukiwania.
2. Wpisz **unikatowy identyfikator** dokumentu (wyłącznie wartość liczbową).
3. Naciśnij **Enter** lub kliknij ikonę **Wyszukaj**.

Jeżeli w polu wyszukiwania zostanie wpisana wyłącznie wartość liczbowa, system automatycznie wyszuka dokument o podanym identyfikatorze w aktualnie wyświetlanej liście dokumentów.

---

## Wyszukiwanie po nazwie klienta

W module **Repozytorium** pole wyszukiwania umożliwia również wyszukiwanie rekordów po nazwie klienta lub powiązanej firmy.

Można wpisać:

- pełną nazwę klienta,
- fragment nazwy klienta,
- pełny kod klienta,
- fragment kodu klienta.
![Wyszukiwanie pełnej nazwy klienta](/img/wysz_kontekstowe1.png)

Wyszukiwanie nie rozróżnia wielkości liter.

Pole wyszukiwania może być używane razem z istniejącymi filtrami w celu dalszego zawężania wyników.

---


## Wyniki kontekstowe

Po wpisaniu frazy i zatwierdzeniu (Enter lub kliknięcie lupki), wyniki pojawiają się **bezpośrednio powyżej**, w tabeli dokumentów.

- Lista wyszukiwania jest ograniczona do aktualnie otwartej sekcji (np. tylko folder KSEF)
- Można wykonywać dalsze operacje: edycja, podgląd, eksport itd.
---
