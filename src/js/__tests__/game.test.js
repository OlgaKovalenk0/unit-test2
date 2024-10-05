import { sortCharactersByHealth } from '../game';


test.each([
    [
        [
            {name: 'мечник', health: 10},
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
        ],
        [
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
            {name: 'мечник', health: 10},
        ]
    ],
    [
        [
            {name: 'мечник', health: 10},
            {name: 'маг', health: 10},
            {name: 'лучник', health: 40},
        ],
        [
            {name: 'лучник', health: 40},
            {name: 'мечник', health: 10},
            {name: 'маг', health: 10},
        ]
    ]
  ])('', (testing, expected) => {
    const result = sortCharactersByHealth(testing);

    expect(result).toEqual(expected);
  });