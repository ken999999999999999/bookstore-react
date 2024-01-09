import { createAppAsyncThunk } from "../createAppAsyncThunk"
import { IBook } from "./bookSlice"

const data = [
  {
    title: "Sed",
    description:
      "Cras eros est, faucibus in dolor efficitur, consequat dignissim nisl. Suspendisse vitae ex egestas, aliquet nisi in, convallis leo. Sed luctus diam eu dui pharetra venenatis. Donec semper rhoncus orci eu convallis.",
  },
  {
    title: "Class",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim sem ut dapibus sagittis. Cras pretium id purus ut dictum. Nam porttitor convallis ex, sed venenatis ligula imperdiet sit amet.",
  },
  {
    title: "aptent",
    description:
      "Ut lectus nunc, sagittis vitae viverra nec, vestibulum in mi. Etiam sit amet diam vitae mi sollicitudin gravida sed et nulla. In quis posuere nisi, ut auctor leo. Nam quis dui dapibus, dapibus sapien eu, placerat lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
  },
  {
    title: "taciti",
    description:
      "Pellentesque euismod viverra faucibus. Nam nisi magna, fringilla eget auctor non, eleifend aliquet arcu. Cras euismod leo dolor, vitae posuere turpis cursus ut. Aliquam erat volutpat. Ut feugiat justo nec erat commodo semper. Sed finibus sollicitudin ante, sed fermentum eros tristique ac. Etiam felis lectus, porta vel dapibus in, mollis ac purus. Praesent nec metus arcu. Fusce vitae nisl sit amet nulla placerat tempus ac nec arcu.",
  },
  {
    title: "sociosqu",
    description:
      "Donec quis orci rutrum, cursus mi imperdiet, tincidunt nunc. Pellentesque condimentum purus risus, vel sollicitudin turpis finibus eget. Etiam aliquet laoreet neque, ac ultricies turpis placerat vel. Ut iaculis bibendum euismod. Nunc tempor semper consectetur.",
  },
  {
    title: "ad",
    description:
      "Pellentesque et lectus nibh. Praesent turpis orci, tempor sodales volutpat nec, molestie efficitur eros. Morbi ultrices vitae urna sed mattis. Praesent posuere est id pharetra eleifend. Fusce tincidunt urna augue, sagittis interdum quam scelerisque at. Donec sodales nisl erat, sit amet egestas neque pharetra non.",
  },
  {
    title: "litora",
    description:
      "Ut bibendum lacinia sapien, sed eleifend leo interdum ac. Vivamus venenatis velit sit amet libero porta tincidunt. Aliquam lorem orci, sollicitudin quis scelerisque ut, finibus sit amet velit.",
  },
  {
    title: "per",
    description:
      "Nam dictum purus elit, ac interdum leo consectetur ut. Pellentesque vel finibus nisl, at sollicitudin lacus. Etiam in elementum libero. Praesent convallis tempus nunc, sagittis sollicitudin mauris suscipit sit amet.",
  },

  {
    title: "conubia",
    description:
      "Sed vehicula placerat ullamcorper. Quisque viverra, ex at auctor blandit, nisl lorem maximus odio, id convallis ex tellus in augue. Morbi malesuada, libero quis euismod pellentesque, dolor ligula imperdiet risus, eget imperdiet nunc neque ac tellus. Nam sodales sapien sed lectus aliquet lobortis. ",
  },
  {
    title: "nostra",
    description:
      "Donec pellentesque, purus nec condimentum dapibus, nisl orci posuere sem, faucibus aliquet elit est eget mi. Sed luctus consequat ante ut feugiat. Phasellus efficitur dui eget lorem ultrices, at pellentesque nisl blandit. Quisque nec vulputate eros. Proin malesuada iaculis dui, in blandit erat vehicula in.",
  },

  {
    title: "per inceptos",
    description:
      "Praesent nunc elit, rutrum quis efficitur vel, pharetra volutpat ex. Ut eget est ut ante malesuada porttitor. Curabitur tincidunt dui mattis congue tincidunt. Vivamus ex sem, congue ac eros vel, facilisis vulputate enim. Integer in efficitur nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
  },
  {
    title: "Donec ac bibendum",
    description:
      "Sed semper euismod nisi eu pharetra. Donec pharetra dignissim eros ut accumsan. Curabitur massa libero, auctor at sodales at, auctor eu felis. Duis risus lectus, placerat nec faucibus non, maximus ac est. Suspendisse nunc diam, egestas ac semper et, mattis id lectus. Quisque maximus auctor orci sit amet ullamcorper. Donec pretium mi vel volutpat tristique. Phasellus ut pellentesque ante. Curabitur lorem enim, laoreet et tempor sed, tincidunt et risus. Praesent ultricies nunc ligula, a fermentum sem efficitur id. Donec sed massa diam. Nullam sed aliquet felis. Fusce dapibus nibh sed consectetur malesuada. Donec pulvinar risus neque, sed mollis odio porttitor quis.",
  },
  {
    title: "at pharetra",
    description:
      "Nullam et tristique enim. Nam semper tempor tristique. Mauris ultricies quam nunc, quis pharetra nulla pharetra nec. Curabitur sit amet porta libero. Ut ut augue id massa pellentesque sollicitudin sit amet et sapien. Vivamus accumsan purus et nunc condimentum, ut condimentum tellus tristique. Quisque semper nulla sed imperdiet condimentum. Cras diam lorem, aliquet ut lacus vitae, ornare molestie sem. Nulla sagittis dignissim ullamcorper. Duis vitae nisi id metus faucibus fermentum. Phasellus molestie finibus fermentum. Donec in sapien egestas, sodales erat non, venenatis arcu. Pellentesque finibus efficitur lobortis.",
  },
]

export const fetchBooksAsync = createAppAsyncThunk(
  "books/fetchBooks",
  async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 3000)
    })
    const categories = [
      "Action and Adventure",
      "Classics",
      "ComicBook",
      "Horror",
    ]

    return data.map(
      (value, index) =>
        ({
          ...value,
          id: index + 1,
          category: categories[index % 4],
          price: (index + 1) * 10,
        } as IBook)
    )
  }
)
